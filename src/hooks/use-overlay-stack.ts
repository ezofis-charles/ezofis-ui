import { useNavigate, useRouter, useSearch } from '@tanstack/react-router'
import { useCallback, useMemo } from 'react'
import { decodeBase64, encodeBase64 } from '@/utils/base64'

const stringify = (items: string[]) => encodeBase64(items)

const parse = (encoded?: string): string[] => {
  const decoded = decodeBase64(encoded)
  return Array.isArray(decoded) ? (decoded as string[]) : []
}

export function useOverlayStack() {
  const router = useRouter()
  const navigate = useNavigate()
  const { stack } = useSearch({ strict: false })

  const items = useMemo(() => parse(stack), [stack])
  console.log(items)

  const push = useCallback(
    (item: string) => {
      navigate({
        replace: false,
        to: '.',
        search: (prev: Record<string, unknown>) => ({
          ...prev,
          stack: stringify([...items, item]),
        }),
      })
    },
    [items, navigate],
  )

  const has = useCallback((name: string) => items.includes(name), [items])

  const pop = useCallback(() => router.history.back(), [router])

  const closeLast = useCallback(() => {
    navigate({
      replace: true,
      to: '.',
      search: (prev: Record<string, unknown>) => {
        const nextItems = [...items]
        nextItems.pop()
        return {
          ...prev,
          stack: nextItems.length > 0 ? stringify(nextItems) : undefined,
        }
      },
    })
  }, [items, navigate])

  return {
    closeLast,
    has,
    items,
    pop,
    push,
  }
}

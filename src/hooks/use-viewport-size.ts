import { useViewportSize as useBaseHook } from '@mantine/hooks'

export function useViewportSize() {
  const { height, width } = useBaseHook()
  return { height, width }
}

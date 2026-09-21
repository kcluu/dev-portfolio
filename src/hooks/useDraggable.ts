import { useCallback, useRef, useState } from 'react'
import type { PointerEvent } from 'react'

interface Position {
  x: number
  y: number
}

const ORIGIN: Position = { x: 0, y: 0 }

export const useDraggable = () => {
  const [offset, setOffset] = useState<Position>(ORIGIN)

  const dragStart = useRef<Position>(ORIGIN)
  const isDragging = useRef(false)

  const handlePointerDown = useCallback((event: PointerEvent<HTMLElement>) => {
    const target = event.target as HTMLElement

    if (target.closest('.theme-toggle')) {
      return
    }

    isDragging.current = true
    dragStart.current = { x: event.clientX, y: event.clientY }

    event.currentTarget.setPointerCapture(event.pointerId)
  }, [])

  const handlePointerMove = useCallback((event: PointerEvent<HTMLElement>) => {
    if (!isDragging.current) {
      return
    }

    const dx = event.clientX - dragStart.current.x
    const dy = event.clientY - dragStart.current.y

    // update the drag origin every frame so deltas stay relative to "now",
    // then fold that delta into the accumulated offset
    dragStart.current = { x: event.clientX, y: event.clientY }

    setOffset((current) => ({
      x: current.x + dx,
      y: current.y + dy,
    }))
  }, [])

  const handlePointerUp = useCallback(() => {
    isDragging.current = false
  }, [])

  return {
    offset,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
  }
}

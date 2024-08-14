import { SxProps, Theme } from "@mui/material"
import { memo } from "react"

export const typedMemo: <T>(_: T) => T = memo
// non ha nulla a che vedere con la funzione sx
// il suo scopo è evitare che il componente avvolto al
// suo interno non subisca il re-rendering se non avviene
// alcuna modifica al suo stato 

export const sx = (props: SxProps<Theme>) => props
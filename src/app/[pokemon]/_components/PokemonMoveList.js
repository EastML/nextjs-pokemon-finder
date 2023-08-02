"use client"

import { formatName, mostRecentVersion } from "@/app/utils"
import { Accordion, AccordionDetails, AccordionSummary, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const PokemonMoveList = ({ moves }) => {
    
    return (
        <section>
        {Object.entries(moves).map((moveCat, i) => (
            moveCat[1].length > 0 && (
            <Accordion key={i}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant='subtitle1'>{formatName(moveCat[0])} Moves</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TableContainer>
                        <Table size='small'>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Move Name</TableCell>
                                    {moveCat[0] === 'level-up' && <TableCell>Level Learned</TableCell>}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {moveCat[1].sort((a, b) => mostRecentVersion(a).level_learned_at - mostRecentVersion(b).level_learned_at).map((m, i) => (
                                    <TableRow key={i}>
                                        <TableCell>{formatName(m.move.name)}</TableCell>
                                        {moveCat[0] === 'level-up' && (
                                            <TableCell>
                                                {mostRecentVersion(m).level_learned_at}
                                            </TableCell>
                                        )}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </AccordionDetails>
            </Accordion>
                        )
        ))}
                </section>

    )
}

export default PokemonMoveList
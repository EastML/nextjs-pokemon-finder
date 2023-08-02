import { capitalize, formatName } from "@/app/utils"
import { Box, Typography } from "@mui/material"
 

const PokemonStats = ({ name, stats }) => {

    const colors = {
        attack: '#F08030',
        defense: '#F8D030',
        'special-attack': '#6890F0',
        'special-defense': '#78C850',
        hp: '#FF0000',
        speed: '#F85888'
    }

    return (
        <Box bgcolor='#DDD' borderRadius='5px' p={2} width='300'>
            <Typography variant='h5' align='center'>
                {capitalize(name)}&apos;s Base Stats
            </Typography>
            {stats.map(s => (
                <Box key={s.stat.name} mb={1}>
                    <Typography >
                        {formatName(s.stat.name)}: {s.base_stat}
                    </Typography>
                    <Box bgcolor={colors[s.stat.name]} sx={{ width: s.base_stat, height: '10px' }} />
                </Box>
            ))}
        </Box>
    )
}

export default PokemonStats
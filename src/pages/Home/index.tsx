import { useState } from 'react';
import { boxDataTemp, initialColors } from '../../contants';
import {
    Grid, Box1, Box2, Box3, Box4, Box5, Box6, Box7, Box8, Box9,
} from './styles'

const Home = () => {
    const [boxColors, setBoxColors] = useState(initialColors);

    const handleBoxClick = (): void => {
        /**
         * As Math.random is returns a number between 0 and 1
         * Subtracting 0.5 means the random number generated will 
         * be positive or negative. This helps to shuffle the colors
         */
        const newColors = [...boxDataTemp].sort(() => Math.random() - 0.5)
        setBoxColors(newColors)
    }

    return (
        <Grid>
            <Box1 color={boxColors[0]} onClick={handleBoxClick} >
                1
            </Box1>

            <Box2 color={boxColors[1]} onClick={handleBoxClick}>
                2
            </Box2>

            <Box3 color={boxColors[2]} onClick={handleBoxClick}>
                3
            </Box3>

            <Box4 color={boxColors[3]} onClick={handleBoxClick}>
                4
            </Box4>

            <Box5 color={boxColors[4]} onClick={handleBoxClick}>
                5
            </Box5>

            <Box6 color={boxColors[5]} onClick={handleBoxClick}>
                6
            </Box6>

            <Box7 color={boxColors[6]} onClick={handleBoxClick}>
                7
            </Box7>

            <Box8 color={boxColors[7]} onClick={handleBoxClick}>
                8
            </Box8>

            <Box9 color={boxColors[8]} onClick={handleBoxClick}>
                9
            </Box9>
        </Grid>
    )
}

export default Home
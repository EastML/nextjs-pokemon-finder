import { screen, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import PokemonGrid from "../_components/PokemonGrid"
import '@testing-library/jest-dom'

const mockGridData = [
    { id: 137, name: 'porygon' },
    { id: 81, name: 'magnemite' }
]

describe('Rendering', () => {
    test('grid renders', () => {
        render(<PokemonGrid pokemonList={mockGridData} />)

        const search = screen.getByRole('textbox', { name: 'Pokemon Name'})
        const cards = screen.getAllByRole('link')

        expect(search).toBeInTheDocument()
        expect(cards).toHaveLength(2)
    })

    test('card shown on search', async () => {
        render(<PokemonGrid pokemonList={mockGridData} />)

        const search = screen.getByRole('textbox', { name: "Pokemon Name"})
        await userEvent.type(search, 'm')

        const resultCards = screen.getAllByRole('link')
        expect(resultCards).toHaveLength(1)
    })
})
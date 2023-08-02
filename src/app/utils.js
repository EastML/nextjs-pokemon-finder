export const capitalize = (string) => string[0].toUpperCase() + string.slice(1);

export const formatName = (string) => string.split('-').map(s => capitalize(s)).join(' ')

export const mostRecentVersion = (move) => move.version_group_details[move.version_group_details.length - 1]

export const separateMoves = (moves) => {
    const moveCategories = {
        'level-up': [],
        'machine': [],
        'tutor': [],
        'egg': []
    }

    // Pushes moves to appropriate category, by checking the most recent versions learn method
    moves.map(m => moveCategories[mostRecentVersion(m).move_learn_method.name].push(m))

    return moveCategories
}

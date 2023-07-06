const generateRandomFullName = () => {
    const firstNames = ['Дмитрий', 'Никита', 'Вадим', 'Александр', 'Давид', 'Альберт']
    const surNames = ['Кулинич(Ромашко)', 'Иванов(Чандер)', 'Петров(Штейнберг)', 'Измайлов(Макеев)', 'Быстров(Смоляков)', 'Ромашко(Макаревич)']
    const lastNames = ['Игоревич', 'Петрович', 'Николаевич', 'Степанович', 'Вадимович']

    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
    const surName = surNames[Math.floor(Math.random() * lastNames.length)]

    return `${surName} ${firstName} ${lastName}`
}

const fetchRacers = (start, end) => {
    return new Promise((resolve) => {
        const racers = []
        for (let i = start; i < end; i++) {
            const racer = {
                id: Math.random(),
                fullName: generateRandomFullName(),
                maxSpeed: Math.floor(Math.random() * 200),
                raceTime: `00:40:30`,
                penaltyTime: '00:00:45',
                rating: i + 1,
                avatar: `https://cdn-icons-png.flaticon.com/512/1499/1499900.png`,
            }
            racers.push(racer)
        }
        setTimeout(() => resolve(racers), 2000)
    })
}

export default fetchRacers

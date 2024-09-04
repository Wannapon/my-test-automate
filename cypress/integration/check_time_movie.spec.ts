import dayjs = require("dayjs")

const url = 'https://www.sfcinemacity.com'
const todayDate = dayjs().format('DD MMM YYYY')
const nowTime = dayjs().format('HH:mm')
const expectTime = dayjs().add(1, 'hours').format('HH:mm')
const nameMovie = 'Homestay'
const locationMovie = 'SFX CINEMA Central Rama 9'

describe('Check Time Movie', () => {
    it('Go to url', () => {
       cy.visit(url)
    })
  })
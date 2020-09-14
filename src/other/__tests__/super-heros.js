import {getFlyingSuperHeros} from '../super-heros'

test('returns super heros that can fly', () => {
  // const flyingHerosArray = [
  //   {name: 'Dynaguy', powers: ['disintegration ray', 'fly']},
  //   {name: 'Apogee', powers: ['gravity control', 'fly']},
  //   {name: 'Jack-Jack', powers: ['shape-shifting', 'fly']},
  // ]
  // console.log(flyingHeros)

  const flyingHeros = getFlyingSuperHeros()

  // expect(flyingHeros).toEqual(flyingHerosArray)
  // use snapshot to automate modification of
  // our expected results:
  expect(flyingHeros).toMatchSnapshot()
})

const parseName = (name) => name.replace('Mrs. ', '').split(' ')

const parseAge = (ageData) => {
  // more magic
  const age = parseInt(ageData.replace(/\D/g,''), 10) % 100

  // because 42 is Answer to the Ultimate Question of Life, The Universe, and Everything
  return age >= 18 ? age : 42
}

export const mapUserData = (user) => {
  const {
    id,
    name,
    phone: ageData // a little bit of magic
  } = user
  const [firstName, lastName] = parseName(name)
  const age = parseAge(ageData)

  return {
    id,
    firstName,
    lastName,
    age,
  }
}

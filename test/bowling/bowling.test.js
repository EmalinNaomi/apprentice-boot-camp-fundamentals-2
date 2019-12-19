describe('Bowling tests', () => {
  // const rolls = [[10,0],[3,4]]

  const frameContainsStrike = frame => frame[0] === 10 || frame[1] === 10
  const frameContainsSpare = frame => frame[0] + frame[1] === 10

  class Game{
    score(rolls){
      let total = 0
      rolls.forEach((frame, index) => {
        if(frameContainsStrike(frame)){
          console.log("inside strike if condition before adding", index, total)

          total += rolls[index + 1][0]
          total += rolls[index + 1][1]
          console.log("inside strike if condition after adding", index, total)
        }

        if(frameContainsStrike(frame) && !frameContainsStrike(frame)){
          console.log("inside spare if condition after adding", index, total)

          total += rolls[index + 1][0]

          console.log("inside spare if condition after adding", index, total)

        }
      const frameScore = frame[0] + frame[1]

        total += frameScore
      })
        return total
    }
  } 
       xtest('score equals zero after twenty rolls', () => {
          const rolls = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]
          const game = new Game()
  
      expect(game.score(rolls)).toBe(0)

  });

  xtest('score equals twenty after twenty rolls of one', () => {
    const rolls = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]]
    const game = new Game()
  
    expect(game.score(rolls)).toBe(20)

  })
  xtest('score with a spare adds first roll of next frame', () => {
    const rolls = [[2,8],[1,1]]
    const game = new Game()
  
    expect(game.score(rolls)).toBe(13)
  })

  test('score with a double spare adds first roll of next frame', () => {
    const rolls = [[2,8],[1,1],[6,4],[2,3]]
    const game = new Game()

    expect(game.score(rolls)).toBe(30)
  })

  xtest('score with a strike adds next two rolls to the frame', () => {
    const rolls = [[10,0],[3,4]]
    const game = new Game()
    expect(game.score(rolls)).toBe(24)
  })
})
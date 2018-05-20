exports.groupSearch = function (groups, query) {
  return groups.filter(item => {
    return item.generationData.title.includes(query)
  })
}

exports.nameSearch = function (groups, query) {
  var newArray = []
  // I will filter based on object contains two ID's
  // property user1_uid
  // property user2_uid
  console.log(groups, 'this is the group ')
  // return groups.map(item => {
  //   return item.pairs.map(pair => {
  //     // query fde00c4f36cc
  //     // pair fde00c4f36cc
  //     newArray.concat(pair)
  //   })
  // })

  for (var i = 0; i < groups.length; i++) {
    for (var j = 0; i < groups[i].pairs.length; i++) {
      if (groups[i].pairs[j].user1_uid.includes(query) || groups[i].pairs[j].user2_uid.includes(query)) {
        newArray.push(groups[i].pairs[j])
        groups[i].pairs = newArray
        newArray = []
      }
    }
  }
}

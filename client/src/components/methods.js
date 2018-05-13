exports.groupSearch = function (groups, query) {
  return groups.filter(item => {
    return item.generationData.title.includes(query)
  })
};


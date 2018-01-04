const getProjection =  (fieldASTs) => {
  console.log("YOLOOO",fieldASTs.fieldNodes[0].selectionSet)
  return fieldASTs.fieldNodes[0].selectionSet.selections.reduce((projections, selection) => {
    console.log("WEHS", selection.name.value)
    projections[selection.name.value] = true;
    return projections;
  }, {})
}

module.exports = {
  getProjection
}

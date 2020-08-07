const tree = {
    value: 0,
    checked: false,
    children: [{
        value: 1,
        checked: true,
        children: [{
            value: 11,
            checked: true,
            children: null
          }]
        }, {
        value: 2,
        checked: false,
        children: [{
            value: 22,
            checked: true,
            children: null
          },{
            value: 23,
            checked: true,
            children: null
          }]
      }]
}

function toChildTopSelection(selection, childNode){
    return selection.concat(getTopSelection(childNode));
}

function getTopSelection(node){
    return node.checked
        ?   [node.value]
        :   node.children !== null
            ? node.children.reduce(toChildTopSelection, [])
            : []
}

console.log(getTopSelection(tree));
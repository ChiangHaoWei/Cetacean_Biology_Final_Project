let dataTW
let rawDataTW
const ranges = {
  year: [
    '1994-1998',
    '1999-2003',
    '2004-2008',
    '2009-2013',
    '2014-2018',
    '2019&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp',
  ],
  month: ['Jan-Mar', 'Apr-Jun', 'Jul-Sep', 'Oct-Dec'],
  season: ['Winter', 'Summer'],
}

fetch('assets/js/draw_data_tw.json')
  .then(function (response) {
    return response.json()
  })
  .then(function (temp_tw_data) {
    tw_map.mapdata.locations = temp_tw_data
    tw_map.load()
    const node = document.getElementById('map_tw')
    node.style.marginLeft = '20%'
    removeADs()
    dataTW = classify(temp_tw_data)
    rawDataTW = temp_tw_data
  })

fetch('assets/js/draw_data_irish.json')
  .then((res) => {
    return res.json()
  })
  .then((temp_irish_data) => {
    irish_map.mapdata.locations = temp_irish_data
    irish_map.load()
    const node = document.getElementById('map_irish')
    node.style.marginLeft = '25%'
    removeADs()
  })

const classify = (data) => {
  const result = {
    year: {
      '1994-1998': [],
      '1999-2003': [],
      '2004-2008': [],
      '2009-2013': [],
      '2014-2018': [],
      '2019&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp': [],
    },
    month: {
      'Jan-Mar': [],
      'Apr-Jun': [],
      'Jul-Sep': [],
      'Oct-Dec': [],
    },
    season: {
      Winter: [],
      Summer: [],
    },
  }
  let nums = [0, 0, 0, 0, 0, 0]
  for (const key in data) {
    if (data[key].year <= 1998) {
      const temp = { ...data[key], color: '#efa8b0' }
      result.year['1994-1998'][nums[0]] = temp
      nums[0]++
    } else if (data[key].year <= 2003) {
      const temp = { ...data[key], color: '#c79cc8' }
      result.year['1999-2003'][nums[1]] = temp
      nums[1]++
    } else if (data[key].year <= 2008) {
      const temp = { ...data[key], color: '#a89cc8' }
      result.year['2004-2008'][nums[2]] = temp
      nums[2]++
    } else if (data[key].year <= 2013) {
      const temp = { ...data[key], color: '#9bb2e1' }
      result.year['2009-2013'][nums[3]] = temp
      nums[3]++
    } else if (data[key].year <= 2018) {
      const temp = { ...data[key], color: '#8cc9f0' }
      result.year['2014-2018'][nums[4]] = temp
      nums[4]++
    } else {
      const temp = { ...data[key], color: '#0e98f0' }
      result.year['2019&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp'][nums[5]] =
        temp
      nums[5]++
    }
  }
  nums = [0, 0, 0, 0]
  for (const key in data) {
    if (data[key].month <= 3) {
      const temp = { ...data[key], color: '#efa8b0' }
      result.month['Jan-Mar'][nums[0]] = temp
      nums[0]++
    } else if (data[key].month <= 6) {
      const temp = { ...data[key], color: '#c79cc8' }
      result.month['Apr-Jun'][nums[1]] = temp
      nums[1]++
    } else if (data[key].month <= 9) {
      const temp = { ...data[key], color: '#9bb2e1' }
      result.month['Jul-Sep'][nums[2]] = temp
      nums[2]++
    } else {
      const temp = { ...data[key], color: '#8cc9f0' }
      result.month['Oct-Dec'][nums[3]] = temp
      nums[3]++
    }
  }
  nums = [0, 0]
  for (const key in data) {
    if (data[key].month <= 3 || data[key].month >= 10) {
      const temp = { ...data[key], color: '#c79cc8' }
      result.season['Winter'][nums[0]] = temp
      nums[0]++
    } else {
      const temp = { ...data[key], color: '#9bb2e1' }
      result.season['Summer'][nums[1]] = temp
      nums[1]++
    }
  }

  return result
}

const removeADs = () => {
  var a = document.querySelectorAll("[href='https://simplemaps.com']")
  // console.log(a)
  if (a[1]) {
    a[1].remove()
  }
  if (a[0]) {
    a[0].remove()
    console.log('find AD!')
  } else {
    console.log('not found!')
  }
}

// window.setInterval(removeADs, 5000)
// window.setTimeout(removeADs, 2000)

const handleSelectChange = () => {
  const selectNode = document.getElementById('classify-category')

  if (!dataTW || !rawDataTW) {
    console.log('data is not ready')
    selectNode.selectedIndex = 0
    return
  }

  const mapOptNode = document.getElementById('map-option')
  const mapSpacingNodeT = document.getElementById('spacing-top')
  const mapSpacingNodeD = document.getElementById('spacing-down')

  let selectedIndex = selectNode.selectedIndex
  let value = selectNode.options[selectedIndex].value

  const optNode = document.getElementById('classify-options')
  if (optNode) {
    mapOptNode.removeChild(optNode)
  }

  if (selectedIndex === 0) {
    tw_map.mapdata.locations = rawDataTW
    tw_map.refresh()
    mapSpacingNodeT.style.height = '0px'
    mapSpacingNodeD.style.height = '0px'
    return
  }
  mapSpacingNodeT.style.height = '20px'
  mapSpacingNodeD.style.height = '20px'
  const parent = document.createElement('div')
  parent.id = 'classify-options'
  parent.className = 'row col-12'

  for (let i = 0; i < ranges[value].length; i++) {
    const group = document.createElement('div')
    group.className = `col-${
      value == 'year' ? 4 : 12 / ranges[value].length
    } col-6-small col-12-xsmall`
    const checkbox = document.createElement('input')
    const label = document.createElement('label')
    checkbox.type = 'checkbox'
    checkbox.id = `classify-${value}-${i}`
    checkbox.name = `classify-${value}-${i}`
    checkbox.onclick = () => {
      handleLabelClick(value)
    }
    label.htmlFor = `classify-${value}-${i}`
    label.innerHTML = ranges[value][i]
    group.appendChild(checkbox)
    group.appendChild(label)
    parent.appendChild(group)
  }
  mapOptNode.insertBefore(parent, mapSpacingNodeD)
}

const handleLabelClick = (mode) => {
  const newData = genMapDate(mode)
  tw_map.mapdata.locations = newData
  tw_map.refresh()
}

const genMapDate = (mode) => {
  const updateData = {}
  let index = 0
  // console.log('call genMapData')
  // console.log(mode)
  for (let i = 0; i < ranges[mode].length; i++) {
    const checkbox = document.getElementById(`classify-${mode}-${i}`)
    if (checkbox.checked) {
      dataTW[mode][ranges[mode][i]].forEach((value) => {
        updateData[index.toString()] = value
        index++
      })
    }
  }
  return updateData
}

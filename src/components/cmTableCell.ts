interface TableCell {
  row?: any
  column?: any
  colIndex?: number
  rowIndex?: number
  data?: any
}

export default {
  name: 'CmTableCell',
  props: ['row', 'column', 'colIndex', 'rowIndex'],
  setup(props: TableCell) {
    return () => [h('div', props.column.slot(props.row))]
  },
}

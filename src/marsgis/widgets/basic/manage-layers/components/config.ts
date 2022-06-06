const commonConfig = {
    initialValue: '',
    rules: [],
    component: 'formTtem',
    size: 'normal',
    props: {},
}
export function getFormConfig () {
    return [
      {
        name: 'id',
        title: '工程编号',
        ...commonConfig,
      },
      {
        name: 'projectName',
        title: '项目名称',
        ...commonConfig,
      },
      {
        name: 'finishTime',
        title: '完成时间',
        ...commonConfig
      },
    ]}
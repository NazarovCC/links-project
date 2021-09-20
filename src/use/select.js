


export function useSelectSort(){

    const options=[
      {
          label: "Выберите тип сортировки",
          value: null,
          disabled: true
        },
        {
          label: 'По дате',
          value: 'date'
        },
        {
          label: 'По прочитанным',
          value: 'isReading'
        }
    ]
    return {
      options
    }
}
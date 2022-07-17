import Directory from './components/directory/directory.component';
const App = () => {

  const categories =[
    {
      id:'1',
      title:'hats',
      imageUrl:'https://i.ibb.co/cvpntL1/hats.png'
    },
    {
      id:'2',
      title:'jackets',
      imageUrl:'https://i.ibb.co/cvpntL1/jackets.png'
    },
    {
      id:'3',
      title:'sneakers',
      imageUrl:'https://i.ibb.co/cvpntL1/sneakers.png'
    },
    {
      id:'4',
      title:'womens',
      imageUrl:'https://i.ibb.co/cvpntL1/womens.png'
    },
    
  ]

  return (
    <Directory categories={categories} />
  )
}

export default App;
import Header from './components/Header';
import Article from './components/Article';
import data from './data';
function App() {
const entryElement = data.map((entry)=>{
  return(
    <Article
     key = {entry.id}
     img = {entry.img}
     title = {entry.title}
     country = {entry.country} 
     gogleMapsLink = {entry.googleMapsLink} 
     dates = {entry.dates} 
     text = {entry.text}
    />
  )
})
  return (
    <>
    <Header/>
    <main className='flex flex-col justify-center items-center gap-10'>
       {entryElement}
    </main>
   
    </>
  );
}

export default App

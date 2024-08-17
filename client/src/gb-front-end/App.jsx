import { useState } from 'react'
import { Outlet } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { useMutation, useQuery } from '@apollo/client';
import './App.css'
import Header from './components/header'
import Footer from './components/footer'


// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

//place in the App component
// <ApolloProvider client={client}>
// </ApolloProvider>

function App() {

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />

    </div>
  

  )
}

export default App

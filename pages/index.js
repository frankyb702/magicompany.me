import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Magi INC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Magi Company -- INC!" />
        <p className="description">
          Edit here <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}

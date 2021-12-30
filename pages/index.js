import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from '@nivo/bar'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [
  /*{
    "country": "AD",
    "hot dog": 120,
    "hot dogColor": "hsl(101, 70%, 50%)",
    "burger": 126,
    "burgerColor": "hsl(342, 70%, 50%)",
    "sandwich": 7,
    "sandwichColor": "hsl(78, 70%, 50%)",
    "kebab": 95,
    "kebabColor": "hsl(179, 70%, 50%)",
    "fries": 45,
    "friesColor": "hsl(92, 70%, 50%)",
    "donut": 47,
    "donutColor": "hsl(201, 70%, 50%)"
  },
  {
    "country": "AE",
    "hot dog": 2,
    "hot dogColor": "hsl(31, 70%, 50%)",
    "burger": 53,
    "burgerColor": "hsl(159, 70%, 50%)",
    "sandwich": 32,
    "sandwichColor": "hsl(354, 70%, 50%)",
    "kebab": 49,
    "kebabColor": "hsl(29, 70%, 50%)",
    "fries": 83,
    "friesColor": "hsl(230, 70%, 50%)",
    "donut": 70,
    "donutColor": "hsl(300, 70%, 50%)"
  },
  {
    "country": "AF",
    "hot dog": 81,
    "hot dogColor": "hsl(29, 70%, 50%)",
    "burger": 15,
    "burgerColor": "hsl(249, 70%, 50%)",
    "sandwich": 58,
    "sandwichColor": "hsl(22, 70%, 50%)",
    "kebab": 176,
    "kebabColor": "hsl(245, 70%, 50%)",
    "fries": 138,
    "friesColor": "hsl(301, 70%, 50%)",
    "donut": 114,
    "donutColor": "hsl(19, 70%, 50%)"
  },
  {
    "country": "AG",
    "hot dog": 117,
    "hot dogColor": "hsl(61, 70%, 50%)",
    "burger": 60,
    "burgerColor": "hsl(70, 70%, 50%)",
    "sandwich": 126,
    "sandwichColor": "hsl(112, 70%, 50%)",
    "kebab": 147,
    "kebabColor": "hsl(81, 70%, 50%)",
    "fries": 0,
    "friesColor": "hsl(298, 70%, 50%)",
    "donut": 121,
    "donutColor": "hsl(338, 70%, 50%)"
  },
  {
    "country": "AI",
    "hot dog": 196,
    "hot dogColor": "hsl(166, 70%, 50%)",
    "burger": 92,
    "burgerColor": "hsl(101, 70%, 50%)",
    "sandwich": 116,
    "sandwichColor": "hsl(210, 70%, 50%)",
    "kebab": 133,
    "kebabColor": "hsl(71, 70%, 50%)",
    "fries": 54,
    "friesColor": "hsl(329, 70%, 50%)",
    "donut": 57,
    "donutColor": "hsl(119, 70%, 50%)"
  },
  {
    "country": "AL",
    "hot dog": 191,
    "hot dogColor": "hsl(115, 70%, 50%)",
    "burger": 105,
    "burgerColor": "hsl(326, 70%, 50%)",
    "sandwich": 26,
    "sandwichColor": "hsl(193, 70%, 50%)",
    "kebab": 105,
    "kebabColor": "hsl(87, 70%, 50%)",
    "fries": 121,
    "friesColor": "hsl(0, 70%, 50%)",
    "donut": 73,
    "donutColor": "hsl(271, 70%, 50%)"
  },
  {
    "country": "AM",
    "hot dog": 138,
    "hot dogColor": "hsl(195, 70%, 50%)",
    "burger": 150,
    "burgerColor": "hsl(357, 70%, 50%)",
    "sandwich": 74,
    "sandwichColor": "hsl(222, 70%, 50%)",
    "kebab": 45,
    "kebabColor": "hsl(156, 70%, 50%)",
    "fries": 78,
    "friesColor": "hsl(302, 70%, 50%)",
    "donut": 195,
    "donutColor": "hsl(130, 70%, 50%)"
  }*/

{
  period: '2021-01',
  value: 0
  }, {
  period: '2021-02',
  value: 0
  }, {
  period: '2021-03',
  value: 0
  }, {
  period: '2021-04',
  value: 120000
  }, {
  period: '2021-05',
  value: 20000
  }, {
  period: '2021-06',
  value: 20000
  }, {
  period: '2021-07',
  value: 20000
  }, {
  period: '2021-08',
  value: 20000
  }, {
  period: '2021-09',
  value: 20000
  }, {
  period: '2021-10',
  value: 20000
  }, {
  period: '2021-11',
  value: 20000
  }, {
  period: '2021-12',
  value: 20000
  }
]

const MyResponsiveBar = ({ data /* see data tab */ }) => (
    <ResponsiveBar
        data={data}
        keys={[ 'value' ]}
        indexBy="period"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        /*defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}*/
        /*fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}*/
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'mois',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'visites',
            legendPosition: 'middle',
            legendOffset: -55
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1,7 ] ] }}

        /*legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}*/
        animate={false}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in period: "+e.indexValue}}
    />
)

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {MyResponsiveBar ({data})}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

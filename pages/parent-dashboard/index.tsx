import type { NextPage } from 'next';
import { Card } from 'types/card-type';
// import Head from 'next/head';
// import { getData } from 'utils/getData';

interface Props {
    cards: Card[];
}

const ParentDashboard: NextPage<Props> = ({ cards }) => {
  
    return(       
        <div>Parent-dashboard</div>
      )
}

export default ParentDashboard;

// export const getStaticProps = async () => {

//     const data = await getData('card-test-data.json');
  
//     if(!data) {
//         return { 
//             redirect: {
//                 destination: '/'
//             }
//          }
//     }
  
//     return{
//         props: { cards: data.cards}
//     }
// }
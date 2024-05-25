import { db } from './firebase';
import { collection, query, getDocs } from 'firebase/firestore';

class ranking {
    static async getTopCitiesByArticleCount() {
        const q = query(collection(db, 'articles'));
        const querySnapshot = await getDocs(q);
        const cityCounts = {};

        querySnapshot.forEach(doc => {
            const cityId = doc.data().city_id;
            if (cityCounts[cityId]) {
                cityCounts[cityId]++;
            } else {
                cityCounts[cityId] = 1;
            }
        });

        const sortedCities = Object.keys(cityCounts).map(key => {
            return { city_id: key, articleCount: cityCounts[key] };
        });

        sortedCities.sort((a, b) => b.articleCount - a.articleCount);
        return sortedCities.slice(0, 5);
    }
}

export default ranking;
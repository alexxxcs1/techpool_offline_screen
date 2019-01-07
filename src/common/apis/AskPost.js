import qs from 'qs';
const AskPost = (ajaxinstance) => {
    const customer = {}
    //预热个人总榜 
    customer.getWarmUpPersonRank = () => {
        return ajaxinstance.post('Leaderboard/PersonalWarmUp');
    }
    //预热区域总榜
    customer.getWarmUpRegionRank = () => {
        return ajaxinstance.post('Leaderboard/RegionalWarmingUp');
    }

    return customer

  }
  
  export default AskPost
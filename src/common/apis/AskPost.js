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
    //黑榜
    customer.getBlackRank = () => {
        return ajaxinstance.post('Leaderboard/Blacklist');
    }
    //个人总榜
    customer.getPersonRank = () => {
        return ajaxinstance.post('Leaderboard/IndividualRanking');
    }
    //区域总榜
    customer.getRegionRank = () => {
        return ajaxinstance.post('Leaderboard/RegionalTotalRanking');
    }
    
    return customer

  }
  
  export default AskPost
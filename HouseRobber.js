var rob = function (nums) {
    let maximumAmount = new Array(nums.length);
    maximumAmount[0] = nums[0];
    maximumAmount[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        maximumAmount[i] = Math.max(maximumAmount[i - 1], maximumAmount[i - 2] + nums[i])
    }
    return maximumAmount[nums.length - 1]
};

/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.z
*/
class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:   
        
        maxi = max(candies) 
        results = [True if i + extraCandies >= maxi else False for i in candies]
    
        return results

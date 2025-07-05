function mergeArray(nums1, m, nums2, n){
    const nums1Copy = nums1.slice(0,m);
    let a = 0;
    let b = 0; 
    for(let i = 0; i < m+n; i++){
        if( !(a == m && b < n) && (b == n && a < m) || nums1Copy[a] < nums2[b]){
            nums1[i] = nums1Copy[a++];
        } else {
            nums1[i] = nums2[b++]
        }
    }
    console.log("nunmbs", nums1)
}
const nums1 = [1,3,4,0,0];
const nums2 = [5,5];
console.log("Merge Array", mergeArray(nums1, 3, nums2, 2))
function getCount(str) {
 return ([].filter.call(str, 
                  (curValue)=> (curValue=='a' || curValue=='e' ||curValue=='i' || curValue=='o' || curValue=='u'))).length;
}
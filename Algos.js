function binSearch(arr, val){
    let first = 0;
    let last = arr.length-1;
    let mid;

    while (first<=last){
        mid = Math.floor((first+last)/2);
        if(arr[mid] == val){
            return mid;
        }
        else if(arr[mid]> val){
            last=mid-1;
        }
        else {
            first = mid +1;
        }
    }
    return -1;
}

function Search(Arr, val){
    let x2;
    let NewArr = Arr;
    let finded = false;
    let search = -1;
    let pos = {};
    for(i = 0; (i< Arr.length) && (Arr[i] <= (val/2)); i++){
        NewArr = Arr;
        x2 = val-Arr[i];
        NewArr.splice(0, i+1)
        search = binSearch(NewArr, x2);
        if (search!=-1){
            finded = true;
            pos = {
                first: i,
                second: search + i + 1,
            }
            break;
        }
    }
    return pos;
}


console.log(Search([2,3,4,5,], 4))
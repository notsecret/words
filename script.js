var abc=' abcdefghijklmnopqrstuvwxyz';

function xsum(a,b){
	var pos_a=abc.indexOf(a);
	var pos_b=abc.indexOf(b);
	console.log('xsum: ',a,b);
	console.log('pos: ',pos_a,pos_b);
	if( (pos_a==-1) || (pos_b==-1) ) alert('not found');
	var sum=pos_a+pos_b;
	
	if(sum>abc.length-1){
		sum=sum-abc.length;
	}
	console.log('=',abc[sum]);
	return abc[sum];
}

function xdiff(a,b){
	var pos_a=abc.indexOf(a);
	var pos_b=abc.indexOf(b);
	if( (pos_a==-1) || (pos_b==-1) ) alert('not found');
	var sum=pos_a-pos_b;
	
	if(sum<0) sum=sum+abc.length;
	if(sum>abc.length){
		sum=sum-abc.length;
	}
	return abc[sum];
}

function wordsum(a,b){
	var sum='';
	for(var i=0;i<a.length;i++){
		var a_letter=a.substring(i,i+1);
		var b_letter=b.substring(i,i+1);
		sum=sum+xsum(a_letter,b_letter);
	}
	return sum;
}
function worddiff(a,b){
	var sum='';
	for(var i=0;i<a.length;i++){
		var a_letter=a.substring(i,i+1);
		var b_letter=b.substring(i,i+1);
		sum=sum+xdiff(a_letter,b_letter);
	}
	return sum;
}

var enigmapp = new Vue({
  el: '#enigma',
  data: {
    word1: 'key',
    word2: 'phrase'
    //res:'result'
  },
  computed:{
		res:function(){
			res='';
			res=wordsum(this.word1,this.word2);
			return res;
		}
	}
});

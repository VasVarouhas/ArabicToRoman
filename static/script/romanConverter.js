
function convertToRoman() {
    let mm = document.getElementById("amount").value;
       let emptyStr='';
       let a=Math.trunc(mm/1000);
       let b=mm%1000;
       let c=Math.trunc(b/900);
       let e=b%900;
       let d=Math.trunc(e/500);
       let l=e%500;
       let k=Math.trunc(l/400);
       let j=l%400;
       let g=Math.trunc(j/100);
       let m=j%100;
       let n=Math.trunc(m/90);
       let u=m%90;
       let o=Math.trunc(u/50);
       let p=u%50;
       let pp=Math.trunc(p/40);
       let ppp=p%40;
       let a1=Math.trunc(ppp/10);
       let a2=ppp%10;
       let b1=Math.trunc(a2/9);
       let b2=a2%9;
       let c1=Math.trunc(b2/5);
       let c2=b2%5;
       let v1=Math.trunc(c2/4);
       let v2=c2%4;
       for(let i=a;i>0;i--){
     emptyStr=emptyStr.concat('M');
       }
       if(c==1){
         emptyStr=emptyStr.concat('CM');
       }
       if(d==1){
         emptyStr=emptyStr.concat('D');
       }
      if(k==1){
        emptyStr=emptyStr.concat('CD');
      }
      for(let i=0;i<g;i++){
        emptyStr=emptyStr.concat('C');
      }
      if(n==1){
        emptyStr=emptyStr.concat('XC');
      }
      if(o==1){
        emptyStr=emptyStr.concat('L');
      }
      if(pp==1){
        emptyStr=emptyStr.concat('XL');
      }
      for(let i=0;i<a1;i++){
        emptyStr=emptyStr.concat('X');
      }
      if(b1==1){
        emptyStr=emptyStr.concat('IX');
      }
      if(c1==1){
        emptyStr=emptyStr.concat('V');
      }
      if(v1==1){
        emptyStr=emptyStr.concat('IV');
      }
      for(let i=0;i<v2;i++){
        emptyStr=emptyStr.concat('I');
      }
     document.getElementById("output").value = emptyStr;
    return emptyStr;
     }
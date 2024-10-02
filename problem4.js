const m=parseInt(prompt());
const n=parseInt(prompt());
let pro=1;
if(m>n)
{
    console.log("1");
}
else
{
    for(let i=m;i<=n;i++)
    {
        if(i%2==1)
        {
            pro=pro*i;
            //console.log(pro);
        }
    }
    console.log(pro);
}
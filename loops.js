function forLoop(array)
{
  if(array.length===0)
  {
  for(let i=0; i<25; i++)
  {
    array.push("I am ${i} strange loops.")
    return array
  }
  }
}
export function Tabber(Level: number)
{
  let Tabs: string = '';

  for (let I = 0; I < Level; I++) { Tabs = Tabs + '    '; }

  return Tabs;
}

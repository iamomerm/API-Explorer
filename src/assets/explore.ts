let Level: number = 0;

export function Explore(aObject: Object, aArray: Object[], Parent: string) /* Recursive */
{
  try
  {
    if (Level < 0) { Level = 0; }

    for (let Key in aObject)
    {
      /* Value is Object */
      if (typeof(aObject[Key]) == 'object')
      {
        let Suffix: string = '(Object)';

        if (Array.isArray(aObject[Key])) { Suffix = '(' + 'Array' + ':' + aObject[Key].length.toString() + ')'; }

        let Data = { Level: Level, Parent: Parent, Key: Key, Value: Suffix };

        console.log('[Explorer]' + ' - ' + JSON.stringify(Data) + ' ' + '(Object)');

        aArray.push(Data);

        Level++;

        if (Key == '0') { Explore(aObject[Key], aArray, Parent); } /* friendly output */

        else { Explore(aObject[Key], aArray, Key); }
      }

      else if (typeof(aObject[Key]) != 'object')
      {
        let Data = { Level: Level, Parent: Parent, Key: Key, Value: (aObject[Key]).toString() };

        console.log('[Explorer]' + ' - ' + JSON.stringify(Data));

        aArray.push(Data);
      }
    }

    Level = Level - 1;
  }

  catch (e) { console.log('[Explorer] Error: ' + e); }
}

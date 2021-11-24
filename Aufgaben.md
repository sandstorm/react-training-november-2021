## 1. Props, JSX-Comments, Fragments, Listen-Rendering
1. Erstelle eine Komponente, welche ein `<h1>`-tag, sowie ein `<p>`-tag enthält, ohne ein umschließendes `<div>`-tag zu verwenden
2. Sorge dafür, dass diese Komponente über eine Prop einen Titel bekommt und rendere diesen in das `h1`-Tag. (Typisierung der Props nicht vergessen!)
3. Erstelle eine Komponente, in welcher eine Liste aus beliebigen Strings in eine `<ul>` gerendert wird
4. Binde beide Komponenten in deine `App.tsx` ein
5. Erstelle einen beliebigen Kommentar innerhalb deines JSX in der `App.tsx`

## 2. Children as Props
1. Erstelle eine Komponente welche beliebige React-Nodes als Children erhalten kann und binde diese in deine `App.tsx` ein. Versuche ein `any`-Typing deiner Props zu vermeiden :)

## 3. useState() Counter
1. Erstelle eine neue Komponente `Counter.tsx` bestehende aus einem `<p>`-Tag zur Anzeige des Counters, sowie zwei `<button>`-tags.
2. Binde diese Komponente in deine `App.tsx` ein.
3. Nutze `useState()` um dem Counter ein State zu geben und lies dieses in deinem `<p>`-Tag aus. (Initiales State nicht vergessen)
4. Sorge dafür, dass die Click-handler deiner Buttons deinen Counter erhöhen bzw. verringern

## 4. custom Hook() Counter
1. Extrahiere einen Custom-Hook aus deinem Counter, welcher ein initales State (`number`) und eine Schrittgröße als Parameter erwartet und folgende Dinge als API nach aussen reicht:
  1. sein Counter-State
  2. seine state setter
2. Nutze diesen custom Hook in deiner bestehenden Counter-Komponente (Schrittgröße = 1)
3. Kopieren deine Counter-Komponente und sorge dafür, dass dieser in Zehner-Schritten hoch- und runterzählt
4. Nimm nun eine der Counter-Komponenten und gib die Schrittgröße jetzt als prop hinein anstatt sie hard-zu-coden

## 5. TodoList: useEffect() & API calls
1. Erstelle eine TodoList Komponente
2. Nutze `useEffect()` um einen API call zu `https://jsonplaceholder.typicode.com/todos` macht (fetch-API nutzen), beim ersten Rendern
3. Nutzt `useState()` um die Todos in der Komponente zu speichern
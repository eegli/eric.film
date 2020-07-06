# !!! YOU ARE IN DEVELOPMENT MODE !!!

Der Bundesrat plant eine weitere Lockerung der Corona-Massnahmen. 👀 So sollen Veranstaltungen bis 1000 Personen zugelassen werden. Auch die Polizeistunde soll fallen.

# H1 Header

## H2 Header

### H3 Header

#### H4 Header

# First, let me show you how I write code

This is the Blog Content and it's a code block

```jsx
const BlogContent = ({ title, excerpt, content }) => {
  return (
    <BlogPostContainer>
      <BlogPostTitle>{title}</BlogPostTitle>
      <BlogPostExcerpt>{excerpt}</BlogPostExcerpt>
      <StyledMD
        renderers={{
          code: CodeBlock,
        }}
        source={content}
      />
    </BlogPostContainer>
  );
};
```

For this, I use a package called `react-markdown`. Can you see how this was inline-code?

# What about a table?

Text

# Here is a unordered list and this is a h1

This list has content. Das hat der Bundesrat beschlossen:

- Ab kommenden Montag ist fast alles so wie früher. Der Bundesrat hebt angesichts der guten Entwicklung fast alle Corona-Massnahmen auf.
- Veranstaltungen bis 1000 Personen sind ab Montag wieder erlaubt. Das Verbot für Events mit über 1000 Teilnehmern bleibt wie schon seit Längerem angekündigt noch bis Ende August bestehen.
- Die Abstandsregel wird gelockert. Neu empfiehlt der Bundesrat nicht mehr einen Abstand von 2, sondern 1,5 Metern. Die Regierung hat ausserdem die Vorgaben für die Schutzkonzepte vereinfacht und vereinheitlicht. Es gelten jetzt für alle die gleichen Richtlinien.

# What about a checklist?

- [x] To be done
- [ ] To be completed
- [x] Not done!

# Here is a numbered list and this is a h1

1. This list has content. Das hat der Bundesrat beschlossen:
2. Ab kommenden Montag ist fast alles so wie früher. Der Bundesrat hebt angesichts der guten Entwicklung fast alle Corona-Massnahmen auf.
3. Veranstaltungen bis 1000 Personen sind ab Montag wieder erlaubt. Das Verbot für Events mit über 1000 Teilnehmern bleibt wie schon seit Längerem angekündigt noch bis Ende August bestehen.
4. Die Abstandsregel wird gelockert. Neu empfiehlt der Bundesrat nicht mehr einen Abstand von 2, sondern 1,5 Metern. Die Regierung hat ausserdem die Vorgaben für die Schutzkonzepte vereinfacht und vereinheitlicht. Es gelten jetzt für alle die gleichen Richtlinien.

# This section has different text styles applied to it and this is a h1

Überall habe ein **Lernprozess** stattgefunden, auch bei den _Kantonen_, sagt Bundespräsidentin Sommaruga auf die Frage, ob sie keine Angst hat, dass die Kantone überfordert sein werden. «_Dieser Lernprozess hilft jetzt, Entscheidungen zu fällen.» Sie gibt sich zuversichtlich._ «Jetzt mit 10 bis 35 Ansteckungen pro Tag macht es Sinn, gezielt einzugreifen.» Der Bund ~~verschwinde aber nicht einfach~~, man habe ein Monitoring und sei in einer «viel besseren Ausgangslage».

# This section will be a citation and is a h1

Gleichzeitig mit den Lockerungen wird auch die Homeoffice-Empfehlung gelockert, auch für die besonders gefährdeten Gruppen. Die seien nicht weniger gut geschützt, sagt Bundespräsidentin Sommaruga. Die Arbeitgeber hätten unverändert eine Fürsorge.

> «Da hat sich nichts geändert.»

Berset ergänzt, dass der Abstand oder die Maske für alle gelte – also auch am Arbeitsplatz.

# Abstand halten, Masken oder andere Verhaltensregeln und ein Link...

...werden erst fallen, wenn es eine Impfung oder eine gute Behandlung gibt, sagt Alain Berset. Auch die 1,5 Meter Abstandsregeln sei notwendig. 1 Meter sei schon normal und es brauche einen zusätzlichen Abstand als im Normalfall. [Ich arbeite beim Blick](https://www.blick.ch). Das ist eine Newsagentur.

# Here is an image

![6288344351929447784604DJI_0017-1024x767.jpg](https://media.graphcms.com/xeBuhftsQPS4AxuxewLU)
And last but not least, **phatt text!**

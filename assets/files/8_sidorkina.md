#### Почему это крутой софт?
- [p] локальное + облачное хранение данных в `.md` → никто не заблокает ваши конспекты!
- [p] настраиваемое всЁ + можно прикрутить любые расширения, от автораспознавания речи для ваших антропологических интервью до радужных иконочек
- [p] плагины и расширения пишут просто энтузиасты, а не какая-то корпорация, которая хочет заработать денег!!
- [p] работает офлайн
- [p] есть для телефонов
- [c] совместная работа доступна только в платной версии (или путём шаманства, см. ниже)
#### Почему это крутой софт для поля?
- [p] можно вкрутить авторазметку интервью и работу с файлами
- [p] вставляются страницы пдфок, например нужные куски словаря.
- [p] автовыравнивание глосс!!
- [p] импорт в ворд и пдф
- [p] много видов to-do листов, меня всегда спасают в путанице поля
###### Импорт данных из Notion
вот [тут](https://help.obsidian.md/import/notion). просто выгрузки оттуда в формате `html` тоже подойдут!
### Базовый синтаксис
- [!] синтаксис форматирования в Обсидиане - Markdown 
![[Pasted image 20230503203404.png]]
Заголовки добавляются при помощи _#_
Основы обсидиановского маркдауна [здесь](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax).
#### Ссылки
![[Pasted image 20230503203508.png]]
Интернетные ссылки вставляются вот так: [Obsidian Help](https://help.obsidian.md)
##### Файлы и литература
- ссылки делаются через двойные квадратные скобки [[Обсидиан 101]]
- если статья вне ваулта, то вот так:
[статья про эксплайн](file:\\\C:\Users\Swl\Документы\изба-читальня\two-paths-to-explain.pdf)
- если в имени файла есть пробелы, то надо вставить его в ==<...>==
- ссылки на литературу вставляются через __==Ctrl+Shift+E==__
[[@iatridou_grammatical_2000]]
#### Списки
- [ ] несделанное дело
- [x] сделанное дело
- [!] дело!
- [X] дело но в красном
- [?] непонятное дело
 - [9] bebebe
- [p] jjj
- [c] ffff
- [b] kk
- [i] vv
- [k] vv
- [S] ;;;;;
- ["] fffff
- [>] gffff
- [n] kk
полосочки:
***
****
* * *
- - -
#тэги #для #поиска

Вот %% коммент %% в строке. Он исчезнет если док вывезти в чистовой формат.
%%
вот блок комментов
%% 
#### Код
```py
def conspect():
	consp = x + 1
	return consp
```
#### Вложенные заметки
![[что спрашивать в хантах осенью]]
#### Вложенные файлы
![[lazard_1999_mirativity_mediativity.pdf#page=3]]
![[240722_003.MP3]]
#### Сноски
![[Pasted image 20230503205011.png]]
### Прикольный синтаксис
#### Блоки
>[! info]
>Here's a callout block.

> [! todo] Lorem ipsum dolor sit amet

>[!мысль]

>[!example]

> [! tip] Callouts can have custom titles
> > Like this one.
> 

> [! bug]+
> here is a bug

> [! faq]- Are callouts foldable?
> Yes! In a foldable callout, the contents are hidden when the callout is collapsed.

> [! question] Can callouts be nested?
> > [!todo] Yes!, they can.
> > > [! example] You can even use multiple layers of nesting.

> [!abstract]

> [!success]

> [!warning]

> [!failure]

> [!danger]

> [!quote]

#### Таблички
Ещё можно вставлять блочные схемы и математические формулы, см.[ здесь](https://help.obsidian.md/Editing+and+formatting/Advanced+formatting+syntax).
```
| First name | Last name |
| ---------- | --------- |
| Max        | Planck    |
| Marie      | Curie     |
```

| First name | Last name |
| ---------- | --------- |
| Max        | Planck    |
| Marie      | Curie     |

| `- [I]` | Idea            |
| ------- | --------------- |
| `- [S]` | Amount          |
| `- [p]` | Pro             |
| `- [c]` | Con             |
| `- [b]` | Bookmark        |
| `- ["]` | Quote           |
| `- [0]` | Speech bubble 0 |
| `- [1]` | Speech bubble 1 |
| `- [2]` | Speech bubble 2 |
| `- [3]` | Speech bubble 3 |
| `- [4]` | Speech bubble 4 |
| `- [5]` | Speech bubble 5 |
| `- [6]` | Speech bubble 6 |
| `- [7]` | Speech bubble 7 |
| `- [8]` | Speech bubble 8 |
| `- [9]` | Speech bubble 9 |

## Плагины
### Core plugins
#### Canvas
это такая доска, где можно соединять заметки в схемы и рисовать всякое наподобие майндмепов
посмотрим на пример [[Канва 101.canvas|Канва 101]]
#### Wordcount, search, tags
говорят сами за себя
#### Graph view
интерактивный граф, связывающий все заметки по ссылкам между ними
открывается в левой панели
#### Sync
платная фича, синхронизирует файлы обсидиана между разными устройствами
- [S] можно устроить себе такое же бесплатно:
	- [k] опция первая - [плагин LiveSync](obsidian://show-plugin?id=obsidian-livesync), написанный хорошими людьми
	- [k] опция вторая:
		▲ синхронизируете папку обсидиана с облаком на основном компе
		▲ синхронизируете папку обсидиана с облаком на других устройствах
		■ у меня это пока работает на `GoogleSync` в одну сторону и какой-то хтонической программе для синхронизации с телефоном в другую
### Community plugins
#### Глоссы
[Interlinear Glossing](obsidian://show-plugin? id=ling-gloss) by Mijyuoon
```gloss
\num 1
# Комментарий
\gla Péter-nek van egy macská-ja
\glb pe:tɛrnɛk vɒn ɛɟ mɒt͡ʃka:jɒ
\glc Peter-DAT exist INDEF cat-POSS.3SG
\ft Peter has a cat.
\src Wikipedia – Hungarian Grammar; 2024
```
```gloss
\num 2
\lbl Northern Khanty
\gla #kinška λʉŋət-ti χot-ən wɵλ-ti wɛr-əλ wɵ-s χot-a      jăŋχ-ti wɛr-əλ wɵ-s
\glb book read-nfin.npst house-loc be-nfin.npst deed-poss.3sg be-pst^[3sg^] house-dat go-nfin.npst deed-poss.3sg be-pst^[3sg^]
\ft Intended: ‘He might’ve been visiting (someone) and might’ve been in the library’ Consultant: as if he were in two different places at the same time
```
- [c] нельзя сделать SmallCaps

#### Автозамена
плагин [TypingTransformer](obsidian://show-plugin?id=typing-transformer-obsidian)
![[Pasted image 20240921110350.png]]
#### Красивые иконки
![[Pasted image 20240921112604.png]]
у меня AniPucchin theme
#### Распознавание речи
плагин [Whisper](obsidian://show-plugin?id=whisper)
для аудиозаметок и расшифровок - [Audio Note](obsidian://show-plugin?id=obsidian-audio-notes)
#### "Как в  ноушане"
прикрепление заметок к папкам - вот [тут](obsidian://show-plugin?id=folder-notes)
##### Базы данных как в Notion
▲ [первая опция](obsidian://show-plugin?id=dataview) - через JavaScript
▲ [вторая опция](obsidian://show-plugin?id=sets)
##### Колонки текста как в Notion
плагин [Multi-column Markdown ](obsidian://show-plugin?id=multi-column-markdown)делает такие
#### Помодоро таймер
Если вы любите работать по методу 25/5 (минут работы на минут перерыва, а не часов на дней), то таймер [можно](obsidian://show-plugin?id=pomodoro-widget) прикрепить к рабочему окну
#### Цитирование через Zotero
плагин [Citations](obsidian://show-plugin?id=obsidian-citation-plugin)
#### Добавить в систему английский словарь WordNet
плагин [WordNet](obsidian://show-plugin?id=obsidian-wordnet-plugin)
#### Добавлять заметки к PDF и EPUB
плагин [Annotator](obsidian://show-plugin?id=obsidian-annotator)
#### Презы на Markdown
внутренний плагин Slides и дополнительный - [Advanced Slides](obsidian://show-plugin?id=obsidian-advanced-slides)

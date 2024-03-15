#!/bin/bash

## Get Info
read -p "What's the talk name? " talk_name
read -p "What's the event name? " event_name

talkSlug=$(echo $talk_name | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | tr '\' '')
eventSlug=$(echo $event_name | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
exists=false
template="src/pages/template.mdx"

if [ ! -d "src/pages/$talkSlug" ]; then
	mkdir src/pages/$talkSlug

else
	template=$(find src/pages/$talkSlug -type f -regex '.*\.mdx' -printf '%T+ %p\n' | sort -r | head -n1 | cut -f2- -d" ")
	echo "Talk already exists"
fi

echo $template

cp $template src/pages/$talkSlug/$eventSlug.mdx
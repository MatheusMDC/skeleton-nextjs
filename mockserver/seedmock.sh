#need to be adjusted
#curl 'http://localhost:8001/mock/import' \
#  -H 'Connection: keep-alive' \
#  -H 'sec-ch-ua: "Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"' \
#  -H 'Accept: application/json, text/plain, */*' \
#  -H 'KeepExisting: false' \
#  -H 'sec-ch-ua-mobile: ?0' \
#  -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36' \
#  -H 'Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryPN75BghgQAhdcnaU' \
#  -H 'Origin: http://localhost:8000' \
#  -H 'Sec-Fetch-Site: same-origin' \
#  -H 'Sec-Fetch-Mode: cors' \
#  -H 'Sec-Fetch-Dest: empty' \
#  -H 'Referer: http://localhost:8000/templates/main.html' \
#  -H 'Accept-Language: pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7' \
#  -H 'Cookie: Idea-992343e5=e6573a59-0617-4c90-87d7-18a28f1f8598' \
#  --data-raw $'------WebKitFormBoundaryPN75BghgQAhdcnaU\r\nContent-Disposition: form-data; name="file"; filename="mocks.zip"\r\nContent-Type: application/zip\r\n\r\n\r\n------WebKitFormBoundaryPN75BghgQAhdcnaU--\r\n' \
#  --compressed
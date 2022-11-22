clean:
	rm -rf docs
	rm -rf api
	rm -rf model

generate: clean
	openapi-generator generate \
		-i ../mcc-api-documentation/openapi-public.yaml \
		-g typescript-fetch \
		--additional-properties=supportsES6=true,npmName=mcc-sdk

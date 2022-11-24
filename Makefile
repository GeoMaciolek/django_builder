
deploy:
ifeq "$(name)" ""
	@echo "Specify name e.g. make deploy name=staging" && exit 1
else
	cd packages/djangobuilder.io
	firebase use $(name) || exit 1
	yarn build --mode=$(name) --outDir=dist_$(name) || exit 1
	firebase deploy --public=dist_$(name)
endif
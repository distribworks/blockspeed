build:
	go build -o bs6 main.go

PACKAGE_NAME          := github.com/distribworks/dkron
GOLANG_CROSS_VERSION  ?= v1.19.0

.PHONY: release-dry-run
release-dry-run:
	@docker run \
		--rm \
		--privileged \
		-v ${PWD}:/bs6 \
		-w /bs6 \
		-e GITHUB_TOKEN \
		-v /var/run/docker.sock:/var/run/docker.sock \
		-v `pwd`:/go/src/$(PACKAGE_NAME) \
		-w /go/src/$(PACKAGE_NAME) \
		goreleaser/goreleaser-cross:${GOLANG_CROSS_VERSION} \
		--rm-dist --skip-validate --skip-publish --snapshot

.PHONY: release
release:
	@docker run \
		--rm \
		--privileged \
		-v ${PWD}:/bs6 \
		-w /bs6 \
		-e GITHUB_TOKEN \
		-v /var/run/docker.sock:/var/run/docker.sock \
		-v `pwd`:/go/src/$(PACKAGE_NAME) \
		-w /go/src/$(PACKAGE_NAME) \
		goreleaser/goreleaser-cross:${GOLANG_CROSS_VERSION} \
		--rm-dist --skip-validate

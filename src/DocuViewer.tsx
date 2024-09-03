import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
  Inject,
} from "@syncfusion/ej2-react-pdfviewer";
import React, { useEffect } from "react";

function DocuViewer() {
  let viewer: PdfViewerComponent | null;
  let isopen: boolean = true;

  var isInitialLoading = true;

  function thumClick(event: any) {
    var proxy = viewer.thumbnailViewModule;
    var target = event.target;
    var pageNumber = proxy.getPageNumberFromID(target.id);
    if (proxy.previousElement) {
      proxy.previousElement.classList.remove("e-pv-thumbnail-selection");
      proxy.previousElement.classList.remove("e-pv-thumbnail-focus");
      proxy.previousElement.classList.add("e-pv-thumbnail-selection-ring");
    }
    if (
      target.parentElement.id ===
      proxy.pdfViewer.element.id + "_thumbnail_Selection_Ring_" + pageNumber
    ) {
      proxy.setSelectionStyle(target.parentElement);
      proxy.previousElement = target.parentElement;
    } else if (
      target.id ===
      proxy.pdfViewer.element.id + "_thumbnail_Selection_Ring_" + pageNumber
    ) {
      proxy.setSelectionStyle(target);
      proxy.previousElement = target;
    }
    proxy.pdfViewer.fireThumbnailClick(pageNumber + 1);
    proxy.isThumbnailClicked = true;
    proxy.goToThumbnailPage(pageNumber + 1);
    // if (!isKeyboard) {
    //   proxy.pdfViewerBase.focusViewerContainer();
    // }
    // if (
    //   viewer.annotationModule &&
    //   viewer.annotationModule.inkAnnotationModule
    // ) {
    //   var currentPageNumber = parseInt(
    //     viewer.annotationModule.inkAnnotationModule.currentPageNumber,
    //     10
    //   );
    //   viewer.annotationModule.inkAnnotationModule.drawInkAnnotation(
    //     currentPageNumber
    //   );
    // }
  }

  function documentClick(e: any) {
    var id = e.target.id.toString();
    if (id.includes("container_container_image")) {
      var pageNumber = id.replace(/[^0-9]/g, "");
      getPdfViewer().thumbnailViewModule.goToThumbnailPage(pageNumber - 1);
    }
  }

  function getPdfViewer(): PdfViewerComponent {
    //viewer.thumbnailViewModule.thumbnailClick()
    return document.getElementById("container")?.ej2_instances[0];
  }

  function saveDocument() {
    var viewer = getPdfViewer();
    viewer.pageOrganizerModule.onSaveClicked();
  }

  function documentLoaded() {
    var viewer = getPdfViewer();
    // if (isInitialLoading) {
    //   viewer.isPageOrganizerOpen = true;
    // } else {
    //   viewer.isPageOrganizerOpen = false;
    // }
  }

  return (
    <div style={{ minHeight: "inherit", flex: "2" }}>
      <button onClick={saveDocument}>Save</button>
      <div className="control-section" style={{ minHeight: "inherit" }}>
        <PdfViewerComponent
          ref={(scope) => {
            viewer = scope;
          }}
          id="container"
          documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
          resourceUrl="https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib"
          style={{ height: "720px" }}
          enableToolbar={false}
          enablePageOrganizer={true}
          isPageOrganizerOpen={false}
          enableThumbnail={false}
          documentLoad={documentLoaded}
          onClick={documentClick}
          //   isThumbnailViewOpen={true}
        >
          <Inject
            services={[
              Toolbar,
              Magnification,
              Navigation,
              LinkAnnotation,
              BookmarkView,
              ThumbnailView,
              Print,
              TextSelection,
              TextSearch,
              Annotation,
              FormFields,
              FormDesigner,
              PageOrganizer,
            ]}
          />
        </PdfViewerComponent>
      </div>
    </div>
  );
  function change(args: any) {
    if (args.checked) {
      viewer!.serviceUrl = "";
    } else {
      viewer!.serviceUrl =
        "https://services.syncfusion.com/react/production/api/pdfviewer";
    }
    viewer!.dataBind();
    viewer!.load(viewer!.documentPath, null);
  }
}
export default DocuViewer;

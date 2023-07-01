import { Editor } from '@tinymce/tinymce-react';
import { useState } from 'react';
import ModalShared from '../../../../shared/components/modal/Modal';
import { useDataContext } from '../../../../shared/hooks/useDataContext';
import { GuideType } from '../../types/guidesType';
import { URL_EDIT_GUIDE } from '../../../../shared/constants/urls';
import { ButtonShared, InputShared, UseRequest } from '../../../../shared';
import SelectShared from '../../../../shared/components/input/Select';
import { npcTypesMapping } from './NpcCollumn';
import { MethodsEnum } from '../../../../shared/enums/method.enum';

interface EditGuideContentProps {
  guideId: number | undefined;
}

const EditGuideContent = ({ guideId }: EditGuideContentProps) => {
  const { guides } = useDataContext();
  const { request, loading } = UseRequest();
  const selectedGuide = guides.find((guide) => guide.guide.id === guideId);

  const [guideContent, setGuideContent] = useState(selectedGuide?.guide.content || '');

  const handleEditorChange = (content: string) => {
    setGuideContent(content);
  };

  const handleSave = async () => {
    if (!selectedGuide) {
      return;
    }

    const updatedGuideData: GuideType = {
      guide: {
        ...selectedGuide.guide,
        id: selectedGuide.guide.id,
        content: guideContent,
        images: inputImage,
        npcID: Number(selectedNpcID),
      },
    };

    try {
      await request<GuideType>(
        URL_EDIT_GUIDE(String(guideId)),
        MethodsEnum.PATCH,
        undefined,
        updatedGuideData,
        'Guide updated successfully',
      );
    } catch (error) {
      console.error(error);
    }
  };

  const options = Object.keys(npcTypesMapping).map((key) => ({
    value: Number(key),
    label: npcTypesMapping[Number(key)].label,
  }));

  const [selectedNpcID, setSelectedNpcID] = useState<number | undefined>(
    selectedGuide?.guide.npcID,
  );
  const [inputTitle, setInputTitle] = useState(selectedGuide?.guide.title || '');
  const [inputImage, setInputImage] = useState(selectedGuide?.guide.images || '');

  const handleInputChange = (newValue: string) => {
    setInputTitle(newValue);
  };

  const handleNpcImageChange = (newValue: string) => {
    setInputImage(newValue);
  };

  const handleNpcIDChange = (selectedOption: { value: number }) => {
    setSelectedNpcID(selectedOption.value);
  };

  return (
    <div>
      {selectedGuide && (
        <div className="form-content">
          <div className="input-content">
            <InputShared
              placeholder={selectedGuide.guide.title}
              value={inputTitle}
              onChange={(e) => handleInputChange(e.target.value)}
              className="w50"
              name="title"
              type=""
            />

            <SelectShared
              defaultValue={String(selectedGuide.guide.npcID)}
              options={options}
              className="w50"
              onChange={handleNpcIDChange}
            />

            <InputShared
              placeholder={selectedGuide.guide.images}
              value={inputImage}
              onChange={(e) => handleNpcImageChange(e.target.value)}
              className="w50"
              name="images"
              type=""
            />
          </div>
          <Editor
            apiKey="0n9fph5vzgpoz19kkfvwzdrekjip5lqxnzxwcjmd814r9mbi"
            init={{
              plugins: 'table code image link',
              toolbar:
                'image table code bold italic alignleft aligncenter alignright alignjustify | outdent indent ',
              toolbar_mode: 'floating',
              directionality: 'ltr',
              content_style: 'body { direction: ltr !important; }',
              content_css: '../../../../../public/assets/css/styles.css',
            }}
            initialValue={selectedGuide.guide.content}
            onEditorChange={handleEditorChange}
          />
          <ButtonShared loading={loading} onClick={handleSave}>
            Save
          </ButtonShared>
        </div>
      )}
    </div>
  );
};

const EditGuides = ({ guideId }: EditGuideContentProps) => {
  return <ModalShared content={<EditGuideContent guideId={guideId} />} />;
};

export default EditGuides;

import { Editor } from '@tinymce/tinymce-react';
import { InputShared, UseRequest } from '../../../../shared';
import SelectShared from '../../../../shared/components/input/Select';
import { npcTypesMapping } from './NpcCollumn';
import { GuideType } from '../../types/guidesType';
import { GUIDE_CREATED_URL } from '../../../../shared/constants/urls';
import { useState } from 'react';
import ButtomShared from '../../../../shared/components/button/button';
import { MethodsEnum } from '../../../../shared/enums/method.enum';

const CreateGuide = () => {
  const [guideContent, setGuideContent] = useState('');
  const { request, loading } = UseRequest();
  const [guideData, setGuideData] = useState<GuideType>({
    guide: {
      title: '',
      content: '',
      images: '',
      npcID: 0,
    },
  });
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const handleEditorChange = (content: string) => {
    setGuideContent(content);
  };

  const handleSubmit = async () => {
    const updatedGuideData = {
      ...guideData,
      content: guideContent,
      image: guideContent,
      npcID: selectedCategory,
    };

    try {
      await request<GuideType>(
        GUIDE_CREATED_URL,
        MethodsEnum.POST,
        undefined,
        updatedGuideData,
        'Guide created successfully',
      );

      setGuideData({
        guide: {
          title: '',
          content: '',
          images: '',
          npcID: 0,
        },
      });
      setGuideContent('');
      setSelectedCategory(null);
    } catch (error) {
      console.error(error);
    }
  };

  const options = Object.keys(npcTypesMapping).map((key) => ({
    value: Number(key),
    label: npcTypesMapping[Number(key)].label,
  }));

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedGuideData = { ...guideData, title: e.target.value };
    setGuideData(updatedGuideData);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedGuideData = { ...guideData, image: e.target.value };
    setGuideData(updatedGuideData);
  };

  const handleCategoryChange = (selectedOption: { value: number }) => {
    const updatedGuideData = { ...guideData, npcID: selectedOption.value };
    setGuideData(updatedGuideData);
  };

  return (
    <div className="form-content">
      <div className="input-content">
        <InputShared
          name="title"
          type="text"
          value={guideData.guide.title}
          onChange={handleTitleChange}
          placeholder="Título do Guia"
          className="w50"
        />
        <SelectShared
          defaultValue="Select Category"
          options={options}
          onChange={handleCategoryChange}
          className="w50"
        />

        <InputShared
          name="title"
          type="text"
          value={guideData.guide.images}
          onChange={handleImageChange}
          placeholder="Url da Imagem"
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
        onEditorChange={handleEditorChange}
      />
      <ButtomShared loading={loading} onClick={handleSubmit}>
        Save
      </ButtomShared>
    </div>
  );
};

export default CreateGuide;

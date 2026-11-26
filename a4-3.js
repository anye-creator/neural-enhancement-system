window.A4 = window.A4 || {};
A4.p3 = `
<!-- ===== 06 场景层安全风险分析 ===== -->
<section class="chapter" id="risk">
  <div class="ch-head"><div class="ch-num">06</div>
    <h2>典型场景安全风险分析<span class="en">RISK ANALYSIS ON THE TYPICAL SCENARIO</span><span class="keyflag">风险场景列表</span></h2>
  </div>
  <p class="lede">本章以 SC-1 早高峰场景为对象，沿用作业 3 STPA 的损失（L）、危险（H）、不安全控制动作（UCA）与致险场景（C）基线，从场景要素与人员状态出发识别致险情形，按可能性与严重度分级，形成可追溯到危险、UCA 与安全需求的风险场景列表。本章不重复作业 3 的全系统 UCA 清单，只补充场景层视角下需要单独跟踪的风险情形。</p>

  <h3><span class="h3-n">6.1</span>分析方法与输入</h3>
  <p>分析沿“要素扰动 → 控制动作偏差 → 危险状态 → 损失”的链路展开：先在第 05 章要素填充中定位可能越界的要素，再核对作业 3 已识别的 UCA 与致险场景是否覆盖，最后给出场景层风险条目。输入包括：表 4-1 运行设计范围、表 4-2/4-3 状态与人员条件、作业 3 的 H-1～H-8、UCA-01～14、C-1～C-10 与 SR-01～10。</p>

  <h3><span class="h3-n">6.2</span>风险分级准则</h3>
  <p>风险等级由可能性（P）与严重度（S）组合判定。可能性结合高峰时段的出现频次与触发难易度评估；严重度参照作业 3 的损失类别 L-1～L-5 划分。分级用于确定处置优先级，不替代定量风险评价。</p>
  <div class="duo">
    <div>
      <h5>PROBABILITY<b>可能性 P</b></h5>
      <dl>
        <dt>P-高</dt><dd>高峰运行中较易出现，或多车并发时反复触发。</dd>
        <dt>P-中</dt><dd>特定条件下可能出现，需要素叠加才触发。</dd>
        <dt>P-低</dt><dd>小概率事件，依赖多重失效或罕见外部干扰。</dd>
      </dl>
    </div>
    <div>
      <h5>SEVERITY<b>严重度 S</b></h5>
      <dl>
        <dt>S-致命</dt><dd>可能导致人员伤亡（对应 L-1）。</dd>
        <dt>S-严重</dt><dd>较重伤害、车辆/设施损坏或线路中断（L-2/L-3）。</dd>
        <dt>S-轻微</dt><dd>轻微伤害、短时延误或秩序扰动（L-3 轻度）。</dd>
      </dl>
    </div>
  </div>
  <div class="tbl-wrap">
    <table class="data">
      <caption>表 6-1　风险等级矩阵（P × S）</caption>
      <colgroup><col style="width:22%"><col style="width:26%"><col style="width:26%"><col style="width:26%"></colgroup>
      <thead><tr><th>可能性 ＼ 严重度</th><th>S-致命</th><th>S-严重</th><th>S-轻微</th></tr></thead>
      <tbody>
        <tr><td class="id">P-高</td><td><span class="risk-h hi">高风险</span></td><td><span class="risk-h mid">中风险</span></td><td><span class="risk-h lo">低风险</span></td></tr>
        <tr><td class="id">P-中</td><td><span class="risk-h hi">高风险</span></td><td><span class="risk-h mid">中风险</span></td><td><span class="risk-h lo">低风险</span></td></tr>
        <tr><td class="id">P-低</td><td><span class="risk-h mid">中风险</span></td><td><span class="risk-h mid">中风险</span></td><td><span class="risk-h lo">低风险</span></td></tr>
      </tbody>
    </table>
  </div>

  <h3 id="rslist"><span class="h3-n">6.3</span>风险场景列表（Risk Scenario List）</h3>
  <p>下表为 SC-1 场景导出的风险场景清单。每条给出触发条件与因果链、关联危险与前序分析条目、可能后果、分级与缓释方向；缓释方向指回作业 3 的安全需求（SR）或 SyRS 需求，保证风险处置有归属、可验证。</p>
  <div class="tbl-wrap">
    <table class="data">
      <caption>表 6-2　风险场景列表 RS-01 ～ RS-10</caption>
      <colgroup><col style="width:8%"><col style="width:25%"><col style="width:18%"><col style="width:11%"><col style="width:16%"><col style="width:10%"><col style="width:12%"></colgroup>
      <thead><tr><th>编号</th><th>风险场景描述</th><th>触发条件 / 因果链</th><th>关联危险</th><th>关联 UCA / 前序场景</th><th>分级 P×S</th><th>缓释 / 承接</th></tr></thead>
      <tbody>
        <tr>
          <td class="id">RS-01</td>
          <td>排队等候或连发车辆之间，行人/骑行者突然横穿，感知被车身遮挡，车辆制动或规避不及时。</td>
          <td>视觉遮挡 → 环境反馈受限 → 决策未及时制动</td>
          <td>H-1</td>
          <td>UCA-01/04 · C-1</td>
          <td><span class="risk-h hi">高 · 中×致命</span></td>
          <td>SR-01 · PR-02 · 多源感知冗余与置信度门槛</td>
        </tr>
        <tr>
          <td class="id">RS-02</td>
          <td>高峰拥挤抢上抢下，车门夹伤乘客，或坡板未收回、轮椅未固定即关门起步。</td>
          <td>乘客聚集 → 车门/上下客机构时机失控</td>
          <td>H-2</td>
          <td>UCA-05/08 · C-4</td>
          <td><span class="risk-h mid">中 · 中×严重</span></td>
          <td>SR-02 · 停稳+对齐双条件解锁 · 硬逻辑锁止兜底</td>
        </tr>
        <tr>
          <td class="id">RS-03</td>
          <td>连发后车跟驰过近，前车为避让行人急停，后车制动不及发生追尾。</td>
          <td>编队间距不足 → 制动时序错误 → 追尾失稳</td>
          <td>H-1</td>
          <td>UCA-09 · C-3</td>
          <td><span class="risk-h mid">中 · 中×严重</span></td>
          <td>SR-01 · PR-01 动态间距 · 制动状态监测</td>
        </tr>
        <tr>
          <td class="id">RS-04</td>
          <td>高峰多车并发告警，远程安全员席位或人力配置不足，接管请求响应超时。</td>
          <td>人员/资源不足 → 接管与告警处置延迟</td>
          <td>H-3</td>
          <td>UCA-03/14 · C-7</td>
          <td><span class="risk-h hi">高 · 中×致命</span></td>
          <td>SR-10 · 并发容量核算 · 持证值守与超时升级</td>
        </tr>
        <tr>
          <td class="id">RS-05</td>
          <td>调度未实时掌握车辆故障或低电量状态，仍向其派发新订单，导致途中失电或带病运行。</td>
          <td>状态反馈滞后 → 派单约束失效</td>
          <td>H-4</td>
          <td>UCA-02/06 · C-8</td>
          <td><span class="risk-h mid">中 · 中×严重</span></td>
          <td>SR-04 · 状态实时回传 · 不可用车自动退出队列</td>
        </tr>
        <tr>
          <td class="id">RS-06</td>
          <td>站台客流聚集，部分乘客越出候车区进入车道，车辆可避让空间被压缩。</td>
          <td>秩序扰动 → 弱势参与者进入路径 → 避险空间不足</td>
          <td>H-1 / H-8</td>
          <td>UCA-01 · SR-08</td>
          <td><span class="risk-h hi">高 · 中×致命</span></td>
          <td>SR-01 · SR-08 · 站台秩序管理与越界告警退出</td>
        </tr>
        <tr>
          <td class="id">RS-07</td>
          <td>高峰叠加降雨/反光，感知置信度下降而客流需求激增，降级策略与人工补位衔接不及时。</td>
          <td>天气扰动 × 高峰负荷 → 降级判断与运力补位滞后</td>
          <td>H-1 / H-3</td>
          <td>UCA-04 · C-1 · SC-2</td>
          <td><span class="risk-h mid">中 · 低中×致命</span></td>
          <td>SR-01 · 天气降级规则 R3 · 人工小巴补位预案</td>
        </tr>
        <tr>
          <td class="id">RS-08</td>
          <td>站点周边共享两轮聚集，遮挡站牌视线或侵入车道，车辆识别与绕行空间受限。</td>
          <td>静态障碍/占道 → 可行驶区域收窄</td>
          <td>H-8</td>
          <td>SR-08 · POL-02</td>
          <td><span class="risk-h lo">低 · 中×轻微</span></td>
          <td>POL-02 · 站点 5 m† 内秩序治理 · 越界告警</td>
        </tr>
        <tr>
          <td class="id">RS-09</td>
          <td>车内拥挤中乘客误触急停或开门按钮，若门锁止逻辑被软件层旁路，可能产生误动作。</td>
          <td>人员误操作 → 控制器校验缺陷 → 车门/动力误动作</td>
          <td>H-2</td>
          <td>UCA-05/08 · C-4</td>
          <td><span class="risk-h mid">中 · 低×严重</span></td>
          <td>SR-02 · 独立硬逻辑兜底 · 物理急停与软件旁路隔离</td>
        </tr>
        <tr>
          <td class="id">RS-10</td>
          <td>高峰通信拥塞，若业务链路与接管链路存在共因，可能出现指令丢失、延迟或失控。</td>
          <td>共因失效 → 控制/反馈双断 → 失效安全未及时进入</td>
          <td>H-6</td>
          <td>UCA-13 · C-2</td>
          <td><span class="risk-h mid">中 · 低×致命</span></td>
          <td>SR-06 · 双链路独立 · 失联即 MRC · 指令仲裁校验</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3><span class="h3-n">6.4</span>风险处置与跟踪原则</h3>
  <div class="box">
    <div class="box-t">DISPOSITION PRINCIPLES</div>
    <ul>
      <li><strong>高风险（RS-01、RS-04、RS-06）</strong>：须在设计与运营中闭环，对应安全需求纳入验收用例；未闭环前不得扩大试点范围。</li>
      <li><strong>中风险（RS-02、RS-03、RS-05、RS-07、RS-09、RS-10）</strong>：以降级策略、冗余与规程控制，纳入定期演练与监控台账，跟踪残余风险。</li>
      <li><strong>低风险（RS-08）</strong>：记录观察，结合站点秩序治理与日常巡查复核，出现频次升高时重新评级。</li>
      <li>处置优先级遵循规则 R6：安全 &gt; 服务连续性 &gt; 成本；风险场景与作业 3 的 C-1～C-10、SR-01～10 双向可追溯，新增风险须回写需求或架构约束。</li>
    </ul>
  </div>
</section>

<!-- ===== 07 追溯矩阵与自检 ===== -->
<section class="chapter" id="trace">
  <div class="ch-head"><div class="ch-num">07</div>
    <h2>追溯矩阵与评审自检<span class="en">TRACEABILITY &amp; REVIEW CHECK</span></h2>
  </div>
  <p class="lede">本章把场景分层、要素、ODC 条件、典型场景与风险条目串成双向可追溯链条：向上每条场景与风险都能指回需求或前序安全分析，向下每条缓释都有承担要素与验证方向。</p>

  <h3><span class="h3-n">7.1</span>场景—要素—需求—风险追溯矩阵</h3>
  <div class="tbl-wrap">
    <table class="data">
      <caption>表 7-1　场景分层与风险追溯矩阵</caption>
      <colgroup><col style="width:10%"><col style="width:18%"><col style="width:24%"><col style="width:24%"><col style="width:24%"></colgroup>
      <thead><tr><th>场景层</th><th>代表场景</th><th>主要 ODC 条件</th><th>承接需求</th><th>风险条目</th></tr></thead>
      <tbody>
        <tr><td class="id">L-A 正常</td><td>SC-1 早高峰潮汐</td><td>地理道路、速度、时段、通信定位、能量载荷、系统与人员状态</td><td>FR-01/02/04/05 · PR-01/02 · UR-03/04/07</td><td>RS-01～06、RS-08、RS-09</td></tr>
        <tr><td class="id">L-A 正常</td><td>SC-3 夜间预约低峰</td><td>时段预约制、夜间限速静音、人员在岗</td><td>UR-01/13 · PR-04/08</td><td>并入 RS-04、RS-10 跟踪</td></tr>
        <tr><td class="id">L-B 退化</td><td>SC-2 暴雨感知受限</td><td>天气降级、受限降级态、监控加强</td><td>FR-03 · SR-01 · R3 天气降级</td><td>RS-07</td></tr>
        <tr><td class="id">L-C 应急</td><td>SC-4 低电量返场</td><td>能量条件、回场充电态、替换接续</td><td>FR-08 · SR-04 · PR-07</td><td>RS-05</td></tr>
        <tr><td class="id">L-C 应急</td><td>SC-5 通信中断</td><td>独立接管链路、MRC 兜底状态</td><td>FR-06/07 · SR-03/06 · IR-07</td><td>RS-10</td></tr>
        <tr><td class="id">L-C 应急</td><td>SC-6 施工封路</td><td>受阻停靠、二次选点、事件上报</td><td>FR-07 · SR-08 · POL-02</td><td>RS-06、RS-08</td></tr>
      </tbody>
    </table>
  </div>
  <div class="matrix-note">
    <span>6 / 6 既有场景均完成分层归类</span>
    <span>10 / 10 风险条目均关联危险与缓释方向</span>
    <span>高风险 3 条已指回对应 SR</span>
  </div>

  <h3><span class="h3-n">7.2</span>评审自检</h3>
  <div class="tbl-wrap">
    <table class="data">
      <caption>表 7-2　按运行场景与风险分析准则的自检记录</caption>
      <colgroup><col style="width:24%"><col style="width:12%"><col style="width:64%"></colgroup>
      <thead><tr><th>检查项</th><th>结论</th><th>说明与待办</th></tr></thead>
      <tbody>
        <tr><td>场景分层完整性</td><td>通过</td><td>三层主轴覆盖正常/退化/应急，六维要素齐备；SC-1～6 全部归类，无悬空场景。</td></tr>
        <tr><td>要素可观测性</td><td>通过</td><td>每个分层的要素均给出取值或约束，可在评审与验证中逐项核对。</td></tr>
        <tr><td>ODC 条件完备性</td><td>基本通过</td><td>运行设计范围、系统状态、人员状态三部分已定义；极端温度、强对流等边界工况待详细设计阶段补充量化阈值。</td></tr>
        <tr><td>典型场景论述</td><td>通过</td><td>SC-1 完成要素填充、事件序列、ODC 符合性核对与 MoE，可作为验证用例来源。</td></tr>
        <tr><td>风险追溯完整性</td><td>通过</td><td>RS-01～10 均指回危险、UCA/致险场景与缓释 SR；与作业 3 STPA 结论双向对齐。</td></tr>
        <tr><td>假设值可替换</td><td>待办</td><td>全部 † 标注值（面积、站点数、阈值、并发容量、时段指标等）需在基线评审前由实测或校方数据替换。</td></tr>
        <tr><td>相关方确认</td><td>待办</td><td>后勤集团（S-05）与保险公司（S-12）尚未书面确认；交管、消防条款以正式备案意见为准。</td></tr>
      </tbody>
    </table>
  </div>

  <h3><span class="h3-n">7.3</span>留给小组讨论的问题</h3>
  <div class="box">
    <div class="box-t">OPEN QUESTIONS</div>
    <ul>
      <li>其一，L-B 与 L-C 的判定阈值：感知置信度、通信时延、路面附着等指标低于何值即降级、何值即 MRC，需在详细设计阶段结合实车标定确定。</li>
      <li>其二，高峰并发容量：单名安全员可同时监护的车辆数上限，需由接管演练数据确定，并反推值守编制（对应 RS-04）。</li>
      <li>其三，站台秩序责任边界：乘客越界、两轮聚集更多是交通管理问题，需明确保卫处、运营方与车辆系统各自的处置分工（对应 RS-06、RS-08）。</li>
      <li>其四，天气叠加高峰的补位预案：人工小巴调入干线的触发时点与调度权限，需与后勤集团运行规程对齐（对应 RS-07）。</li>
      <li>其五，ODC 边界工况：积雪、结冰、团雾、高温等极端条件是否纳入首期运行范围，取决于试点定位与保险条款。</li>
    </ul>
  </div>

  <div class="box">
    <div class="box-t">一句话结论 / TAKEAWAY</div>
    <ul>
      <li>场景分层把环境复杂性组织成正常、退化、应急三层，配合六维要素分解，使“系统会遇到什么情况”可逐类核查、不重不漏。</li>
      <li>运行设计条件从范围、系统状态、人员状态三面框定正常运行包络；包络之外必须按降级链兜底，不允许故障中间态。</li>
      <li>典型场景用要素填充、事件序列与 ODC 符合性核对落到可观测行为，是需求验证与场地用例的直接来源。</li>
      <li>场景层风险分析在 STPA 基线上补充风险场景清单，每条风险可追溯到危险、成因与安全约束，处置遵循“安全 &gt; 连续性 &gt; 成本”。</li>
    </ul>
  </div>
</section>
`;
